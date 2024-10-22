# brisa-debug

There are 2 issues on this repo.

1. api POST can't use body. Brisa breaks. (on the homepage try to press the button send request, and explore the logs)
2. When the middleware does a redirect the server actions stops working.
   1. Navigate to /about
   2. Try to submit the server action (pressing the button send request)
   3. Nothing gets in the console.

## Getting Started

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

### Build

```bash
bun build
```

### Start

```bash
bun start
```
