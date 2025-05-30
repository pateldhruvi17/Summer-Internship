CREATE TABLE student_details (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    department VARCHAR(255),
    cgpa NUMERIC(3, 2) CHECK (cgpa >= 0.00 AND cgpa <= 10.00)
);

INSERT INTO student_details (first_name, last_name, department, cgpa)
VALUES('Dhruvi', 'Patel', 'Information Technology', 9.33),
('Dhruv', 'Mehta', 'Computer Engineering', 8.76),
('Sneha', 'Patel', 'Electronics', 9.10),
('Karan', 'Shah', 'Mechanical Engineering', 7.85),
('Riya', 'Desai', 'Information Technology', 8.92),
('Aman', 'Trivedi', 'Civil Engineering', 7.60),
('Neha', 'Joshi', 'Computer Engineering', 9.45),
('Rohit', 'Patel', 'Electrical Engineering', 8.10),
('Priya', 'Kumar', 'Information Technology', 8.75),
('Jay', 'Soni', 'Computer Engineering', 9.00);

select * from student_details;

update student_details set first_name = 'Het' where student_id = 2;

delete from student_details where student_id=8;
select * from student_details;

select first_name from student_details order by first_name asc;

select first_name,last_name from student_details where first_name='Dhruvi' and last_name='Patel';

select student_id,first_name,last_name from student_details where first_name like 'N%';

select student_id,first_name,last_name from student_details where student_id between 3 and 7;

select student_id,first_name,last_name from student_details where first_name not in ('Riya','Neha','Het');

select student_id,first_name,last_name from student_details where last_name is null;

select last_name,count(*) as count from student_details group by last_name;


CREATE TABLE details (
    detail_id SERIAL PRIMARY KEY,
    students_id INT REFERENCES student_details(student_id) ,
    email VARCHAR(100),
    phone VARCHAR(15)
);

INSERT INTO details (students_id, email, phone) VALUES
(1, 'dhruvi.patel@gmail.com', '9876543210'),
(2, 'dhruv.mehta@gmail.com', '9123456780'),
(3, 'sneha.patel@gmail.com', '9988776655');


SELECT 
    student_details.student_id, 
    student_details.first_name, 
    student_details.last_name, 
    student_details.department, 
    student_details.cgpa, 
    details.email, 
    details.phone
FROM 
    student_details student_details
INNER JOIN 
    details details
ON 
    student_details.student_id = details.students_id;


select first_name,last_name from student_details where student_id > any (select student_id from details);