# next-kit

My personal toolbox for building web applications with Next.js.

```zsh
npm install @clxrity/next-kit
```

- [utils](#utils)
- [components](#components)
- [hooks](#hooks)

---

## utils
- [contextFactory](#contextfactory)
- [cn](#cn)

A collection of utility functions for working with Next.js and React.

### contextFactory

```ts
import { contextFactory } from '@clxrity/next-kit';
```

Creates a context with a default value and a provider component.

- Define an initial state for the context.
```ts
type TestContextState = {
  value: string;
}
const initialState: TestContextState = {
  value: 'default value',
};
```
- Define your own function to use the context.
```ts
"use client";
import { useState } from 'react';

const useTestContextState = () => {
  const [value, setValue] = useState<string>(initialState.value);

  return { value, setValue };
}
```
- Use the `contextFactory` to return a provider and a hook to access the context.
```ts
const { Provider, useContext } = contextFactory<TestContextState>(initialState, useTestContextState);
```

### cn

A function to join class names conditionally (supports [tailwindcss](https://tailwindcss.com/) classes).

```ts
import { cn } from '@clxrity/next-kit';
```

```ts
const Component = ({ ...props }) => {
  return (
    <div className={cn('bg-red-500', (props.customProp && 'text-white'), props.className)}>
      Hello World
    </div>
  );
}
```

## components

- [Skeleton](#skeleton)
- [Image](#image)

A collection of reusable components for building web applications with Next.js.

### Skeleton
A skeleton loader component for displaying loading states.

- Pass the ref to the `Skeleton` component to control its size and position as relative to the target element.
- Render conditionally based on the loading state.

```ts
"use client";
import { Skeleton } from '@clxrity/next-kit';
import { useState } from 'react';

export default function Page() {

  const [loading, setLoading] = useState<boolean>(true);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <main>
     {
      loading ? (
        <Skeleton ref={ref} />
      ) : (
        <div ref={ref}>
          Content Loaded
        </div>
      )
     }

      <button onClick={() => setLoading(!loading)}>
        Toggle Loading
      </button>
    </main>
  );
}
```

- Also can be used when passed through `<Suspense>` as the fallback component.

### Image
A wrapper around the Next.js `Image` component to handle loading states and lazy loading.

- Also disables user-select by default.

```ts
import { Image, type ImageProps } from '@clxrity/next-kit';

export default function Page() {

  const imageProps: ImageProps = {
    src: '/path/to/image.jpg',
    alt: 'Description of image',
    width: 500,
    height: 300,
  };

  return (
    <main>
      <Image
        {...imageProps} 
        className="rounded-lg shadow-md"
      />
    </main>
  );
}
```

## hooks
