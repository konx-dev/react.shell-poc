# Shell (Proof of Concept)

A high-performance React orchestrator designed for a plug-and-play Micro-Frontend architecture. Inspired by the extensibility of VS Code, it serves as a secure, lightweight 'Base Image' that dynamically loads interchangeable modules at runtime.

## Stack

* React - 19.2.4
* React-Dom - 19.2.4
* Vite - 7.3.1

*Latest pinned as of 03/26*

## Todo

- [ ] npm -> pnpm
- [ ] Error Boundary
- [ ] Better server error logging

## Docker

Build image:
`docker build -t shell-poc .`

Container (default):
`docker run --name shell-poc -p 3000:3000 shell-poc`

Container (custom port):
`docker run -e SERVER_PORT=4000 --name shell-poc -p 4000:4000 shell-poc`



