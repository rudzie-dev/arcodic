# Staging

This branch is a persistent testing environment, separate from `main`.

**Workflow:**
1. Push changes here (directly, or merge a feature branch into `staging`)
2. Test at the staging preview URL — see the open standing PR for the current link
3. When it's ready to go live, merge `staging` into `main`

`arcodic.com` only ever moves when `main` moves. Nothing pushed to
`staging` reaches production until that merge happens.
