import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    if (!req.body)
      return new Response(JSON.stringify("Don't have form data...!"), {
        status: 403,
        statusText: "Don't have form data...!",
      });
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
    );
    const body = await req.json();

    // console.log('in recordCar check req.body\n', body);

    const { member_id, vehicles } = body;

    vehicles.map(
      async (vehicle: {
        color: number;
        finition: number;
        model: number;
        mine: string;
        immatriculation: string;
      }) => {
        const { immatriculation, mine, model, color, finition } = vehicle;

        const { error } = await supabase.from('cars').insert({
          car_color_id: color,
          car_finition_id: finition,
          car_model_id: model,
          immatriculation,
          member_id,
          min: mine,
        });
        if (error) {
          return new Response(JSON.stringify(error.message), {
            status: 405,
            statusText: 'Error with inserting new Car',
          });
        }
      }
    );
    return new Response(JSON.stringify('GOOD'), {
      status: 200,
      statusText: 'Great Job !!! Car has created successfully :)',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 407,
      statusText: 'Error with POST request for Car',
    });
  }
}
