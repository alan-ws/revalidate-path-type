import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);

    // could place a conditional here; e.g. based on pathname
    // console.log('[Next.js] Revalidating /');
    // revalidatePath('/');

    if (url.searchParams.get('slug')) {
      console.log("[REVALIDATE]: /[locale]/athlete/[slug]")
      console.log(`[Next.js] Revalidating /${url.searchParams.get('locale')}/athlete/${url.searchParams.get('slug')}`);
      revalidatePath(`/${url.searchParams.get('locale')}/athlete/${url.searchParams.get('slug')}`);
    }
  } catch (error) {
    return new Response(`Webhook error: ${(error as any).message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}
