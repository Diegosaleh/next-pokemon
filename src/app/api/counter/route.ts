

export async function GET() {

    // console.log({method: request.method});
    
    return Response.json({
        method: 'GET',
        count: 100
     });
}

export async function POST() {

    // console.log({method: request.method});

    return Response.json({ 
        method: 'POST',
        count: 100
     });
}

