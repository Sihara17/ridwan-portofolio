import { NextResponse } from 'next/server'


export async function POST(req){
try{
const data = await req.json()
// In production, send email or store in DB.
console.log('contact form', data)
return NextResponse.json({ ok: true })
} catch(e){
return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
}
}