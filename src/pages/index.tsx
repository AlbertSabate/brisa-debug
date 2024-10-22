import CounterServer from '@/components/counter-server';
import type { RequestContext } from 'brisa';

export default function Homepage(_: Record<string, undefined>, { finalURL }: RequestContext) {
  async function sendRequest() {
    const response = await fetch(`${new URL(finalURL).origin}/api`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello world from Brisa!' }),
    });
    const data = await response.json();

    // This should console.
    console.log('Response data', data);
  }

  return (
    <>
      <div class="hero">
        <h1>
          <span class="h1_addition">Welcome to </span>Brisa
        </h1>
        <p class="edit-note">✏️ Change this page on </p>
        <code>src/pages/index.tsx</code>
      </div>

      <section class="counter-section">
        <h2>Counters</h2>
        <div class="counters">
          <counter-client initialValue={42} />
          <CounterServer initialValue={37} />
        </div>
        <button type="button" onClick={sendRequest}>Send Request</button>
      </section>
    </>
  );
}
