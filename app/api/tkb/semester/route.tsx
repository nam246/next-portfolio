"use server"

import db from '@lib/database/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const sql = `SELECT * FROM semester`;
        const semester = db.prepare(sql).all();

        return NextResponse.json(semester, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch semester' },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const sql = `INSERT INTO semester (year) VALUES (?)`;
        const body = await req.json();
        console.log(body.year);

        const year = body.year;
        const result = db
            .prepare(sql)
            .run(year);

        return NextResponse.json(
            result,
            { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch semester' },
            { status: 500 }
        );
    }
}