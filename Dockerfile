FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN  npm install --production

FROM node:18-alpine AS builder

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3003

ENV PORT 3003

CMD ["npm", "start"]
