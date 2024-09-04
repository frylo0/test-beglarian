import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
	try {
		const buffer = fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'tests.json'));
		const res = JSON.parse(buffer.toString());
		return Response.json(res, { status: 200 });
	} catch (error) {
		return Response.json(error, { status: 502 });
	}
}
