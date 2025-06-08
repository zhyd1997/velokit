# Supabase self-hosted guide

1. Run all SQL files under [functions](./functions), [rls](./rls/) and [triggers](./triggers/) folders at Supabase SQL editor

2. Change the Auth confirmation path

    If you have email confirmation turned on (the default), a new user will receive an email confirmation after signing up.

    Change the email template to support a server-side authentication flow.

    Go to the [Auth templates](https://supabase.com/dashboard/project/_/auth/templates) page in your dashboard. In the `Confirm signup `template, change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}/api/auth/confirm?token_hash={{ .TokenHash }}&type=email` because we have a route handler under [apps/web](../../../apps/web/app/api/) `api` folder.
