ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User can access their own record" ON users
    FOR ALL
    USING (id = (SELECT auth.uid()))
    WITH CHECK (id = (SELECT auth.uid()));

CREATE POLICY "Anyone can create a user" ON users
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "User can select their own record" ON users
    FOR SELECT
    USING (id = (SELECT auth.uid()));

CREATE POLICY "User can update their own record" ON users
    FOR UPDATE
    USING (id = (SELECT auth.uid()))
    WITH CHECK (id = (SELECT auth.uid()));

CREATE POLICY "User can delete their own record" ON users
    FOR DELETE
    USING (id = (SELECT auth.uid()));
