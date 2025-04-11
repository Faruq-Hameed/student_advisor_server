
import { connect, model } from 'mongoose';
import { Course, CourseSchema } from './src/course/schema/course.schema';
import { Department, DepartmentSchema } from './src/department/schemas/department.schema';
import { Advisor, AdvisorSchema } from './src/advisor/schemas/advisor.schema';

async function seed() {
  await connect('mongodb://localhost:27017/students_db');

  const CourseModel = model('Course', CourseSchema);
  const DepartmentModel = model('Department', DepartmentSchema);
  const AdvisorModel = model('Advisor', AdvisorSchema);

  console.log('🔁 Clearing existing data...');
  await CourseModel.deleteMany({});
  await DepartmentModel.deleteMany({});
  await AdvisorModel.deleteMany({});

  console.log('🌱 Seeding courses...');
  const courses = await CourseModel.insertMany([
    { name: 'Mathematics' },
    { name: 'Physics' },
    { name: 'Computer Science' },
  ]);

  console.log('🌱 Seeding departments...');
  const departments = await DepartmentModel.insertMany([
    { name: 'Science' },
    { name: 'Engineering' },
    { name: 'Arts' },
  ]);

  console.log('🌱 Seeding advisors...');
  const advisors = await AdvisorModel.insertMany([
    { name: 'Dr. Smith' },
    { name: 'Dr. Johnson' },
    { name: 'Dr. Brown' },
  ]);

  console.log('✅ Seeding done!');
  console.log('\n🌐 Here are the IDs you can use:');
  console.log('\nCourses:', courses.map(c => ({ name: c.name, id: c._id })));
  console.log('\nDepartments:', departments.map(d => ({ name: d.name, id: d._id })));
  console.log('\nAdvisors:', advisors.map(a => ({ name: a.name, id: a._id })));

  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
