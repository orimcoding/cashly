INSERT INTO users (email, password) VALUES ('test@example.com', 'hashedpassword123');
INSERT INTO expenses (user_id, amount, category, date, notes) VALUES (1, 20.00, 'Dining', NOW(), 'Lunch');
INSERT INTO goals (user_id, goal_name, target_amount, current_amount, deadline) VALUES (1, 'Vacation Fund', 1000.00, 200.00, '2024-12-31');
INSERT INTO rewards (user_id, reward_type, points, description) VALUES (1, 'Gift Card', 100, 'Redeemable at popular stores');
