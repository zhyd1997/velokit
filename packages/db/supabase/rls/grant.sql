-- 1. Allow schema access
GRANT USAGE ON SCHEMA public TO authenticated, anon;

-- 2. Allow table access
GRANT ALL ON TABLE users TO authenticated, anon;
