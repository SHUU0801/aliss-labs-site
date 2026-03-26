import { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Vercel Serverless Function: Contact Form Handler
 * Endpoint: POST /api/contact
 * 
 * Handles contact form submissions from the frontend.
 * In production, integrate with email service (SendGrid, Resend, etc.)
 */

interface ContactFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, contactName, email, phone, message } = req.body as ContactFormData;

    // Validate required fields
    if (!companyName || !contactName || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['companyName', 'contactName', 'email', 'message'],
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example with Resend:
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@yorumichi.com',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `新しいお問い合わせ: ${companyName}`,
    //   html: `...`,
    // });

    // For now, log to console (visible in Vercel logs)
    console.log('Contact form submission:', {
      companyName,
      contactName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'お問い合わせを受け付けました。ご確認後、担当者からご連絡いたします。',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'お問い合わせの処理中にエラーが発生しました。',
    });
  }
}
