FROM jarredsumner/bun:edge as builder

WORKDIR /gehenna

COPY package.json ./package.json
COPY bun.lockb ./bun.lockb
# COPY .env ./.env

RUN bun install
RUN bun run build

FROM jarredsumner/bun:edge

WORKDIR /trinity

COPY --from=builder /gehenna/node_modules ./node_modules
COPY --from=builder /gehenna/package.json ./package.json
COPY --from=builder /gehenna/bun.lockb ./bun.lockb
COPY --from=builder /gehenna/dist ./dist
# COPY --from=builder /gehenna/.env ./.env

CMD ["bun", "run", "start"]
