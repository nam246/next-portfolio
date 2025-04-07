"use server"

import db from '@lib/database/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const sql = `SELECT * FROM course`;
        const courses = db.prepare(sql).all();

        return NextResponse.json(courses, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch courses' },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const sql = `INSERT INTO course (course_id, name, room, credit, teacher, start_date, end_date, semester_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const body = await req.json();
        const { courseId, name, room, credit, teacher, startDate, endDate, semesterId } = body;
        console.log(body);

        const result = db
            .prepare(sql)
            .run(body.courseId, body.name, body.room, body.credit, body.teacher, body.startDate, body.endDate, body.semesterId);

        NextResponse.json(
            // { id: result.lastInsertRowid },
            { status: 201 }
        );
        return NextResponse.json({ status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch courses' },
            { status: 500 }
        );
    }
}