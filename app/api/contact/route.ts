import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🚀 API Contact endpoint llamado');
  
  try {
    const body = await request.json();
    console.log('📋 Datos recibidos:', body);
    
    const { firstName, lastName, email, phone, insuranceType, message } = body;

    // Validar que tengamos los datos mínimos
    if (!firstName || !lastName || !email || !phone || !insuranceType) {
      console.error('❌ Faltan datos requeridos');
      return NextResponse.json(
        { success: false, message: 'Faltan datos requeridos' },
        { status: 400 }
      );
    }

    console.log('📧 Variables de entorno:');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Configurado' : '❌ No configurado');
    console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✅ Configurado' : '❌ No configurado');

    // Configuración del transportador de email
    console.log('🔧 Configurando transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Solo el email para ti (Golden Vista)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: 'albertoguadron@gmail.com, marketing@goldenvistains.com', // 🔥 CAMBIA ESTE EMAIL POR EL TUYO
      subject: `🔥 New Inquiry from ${firstName} ${lastName} - ${insuranceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FDF6E3;">
          <div style="background: linear-gradient(135deg, #002F4B 0%, #001B2E 100%); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: #B8860B; margin: 0; font-size: 28px; font-weight: bold;">
              🏆 New Lead - Golden Vista Insurance
            </h1>
            <p style="color: #FDF6E3; margin: 10px 0 0 0; font-size: 16px;">
              You have a new potential client interested
            </p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; border: 3px solid #B8860B; margin-bottom: 20px;">
            <h2 style="color: #002F4B; margin-top: 0; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
              📋 Client Information
            </h2>
            
            <div style="display: grid; gap: 15px;">
              <div style="display: flex; align-items: center; padding: 10px; background: #FDF6E3; border-radius: 8px;">
                <strong style="color: #002F4B; width: 140px;">👤 Name:</strong>
                <span style="color: #002F4B;">${firstName} ${lastName}</span>
              </div>
              
              <div style="display: flex; align-items: center; padding: 10px; background: #FDF6E3; border-radius: 8px;">
                <strong style="color: #002F4B; width: 140px;">📧 Email:</strong>
                <a href="mailto:${email}" style="color: #B8860B; text-decoration: none;">${email}</a>
              </div>
              
              <div style="display: flex; align-items: center; padding: 10px; background: #FDF6E3; border-radius: 8px;">
                <strong style="color: #002F4B; width: 140px;">📱 Phone:</strong>
                <a href="tel:${phone}" style="color: #B8860B; text-decoration: none;">${phone}</a>
              </div>
              
              <div style="display: flex; align-items: center; padding: 10px; background: #FDF6E3; border-radius: 8px;">
                <strong style="color: #002F4B; width: 140px;">🛡️ Insurance Type:</strong>
                <span style="color: #002F4B; font-weight: bold; text-transform: uppercase;">${insuranceType}</span>
              </div>
            </div>
          </div>
          
          ${message ? `
          <div style="background: white; padding: 25px; border-radius: 10px; border: 3px solid #B8860B; margin-bottom: 20px;">
            <h3 style="color: #002F4B; margin-top: 0; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
              💬 Client Message
            </h3>
            <div style="background: #FDF6E3; padding: 15px; border-radius: 8px; border-left: 4px solid #B8860B;">
              <p style="color: #002F4B; margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
          ` : ''}
          
          <div style="background: linear-gradient(135deg, #B8860B 0%, #B8860B 100%); padding: 20px; border-radius: 10px; text-align: center;">
            <p style="color: #002F4B; margin: 0; font-weight: bold; font-size: 16px;">
              🚀 Respond quickly to close this sale!
            </p>
            <p style="color: #002F4B; margin: 5px 0 0 0; font-size: 14px;">
              Client submitted from: goldenvistainsurance.com
            </p>
          </div>
        </div>
      `,
    };

    // Enviar solo el email a ti
    console.log('📤 Enviando email...');
    await transporter.sendMail(adminEmail);
    console.log('✅ Email enviado exitosamente');

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado exitosamente' 
    });

  } catch (error) {
    console.error('❌ Error completo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { success: false, message: 'Error enviando email: ' + errorMessage },
      { status: 500 }
    );
  }
}