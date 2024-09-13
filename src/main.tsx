import React from 'react';
import './input.css'
import 'htmx.org'
import { createRoot } from 'react-dom/client';
import { Button } from '@/components/ui/button.tsx';
import { ComboboxDemo } from '@/components/ui/combobox.tsx';

export function test() {
    console.log("testing!")
}

export const HelloButton = (name: string) => {
    console.log('thats an example', name);
    return (
      <>
          <Button onClick={() => console.log("Hallo")}>
              {name}
          </Button>
          <ComboboxDemo></ComboboxDemo>
      </>
    )
}

export function renderButton(e: HTMLElement) {
    const name = e.getAttribute('data-name') ?? "";
    createRoot(e).render(HelloButton(name));
}

test();
