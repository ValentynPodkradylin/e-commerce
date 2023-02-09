import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

import { useRouter } from 'next/router';

type Course = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

const CourseCard = ({ course }: { course: Course }) => {
  const router = useRouter();

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={course.imageUrl} alt={course.title} />

      <Box p="6">
        <Heading fontSize="xl" mb="2">
          {course.title}
        </Heading>
        <Text>{course.description}</Text>
        <Box display="flex" alignItems="center" mt="auto">
          <Text fontWeight="bold">${course.price}</Text>
          <Button
            onClick={() =>
              router.push('/courses/[id]', `/courses/${course.id}`)
            }
            ml="auto"
            variant="teal"
            size="sm"
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const CoursesPage = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn how to build modern web applications with React',
      imageUrl: 'https://example.com/react-course.jpg',
      price: 19.99,
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      description:
        'Learn how to build scalable and performant back-end applications with Node.js',
      imageUrl: 'https://example.com/node-course.jpg',
      price: 24.99,
    },
    {
      id: 3,
      title: 'Introduction to TypeScript',
      description:
        'Learn how to use TypeScript to write scalable and maintainable JavaScript applications',
      imageUrl: 'https://example.com/typescript-course.jpg',
      price: 14.99,
    },
  ];

  return (
    <Box>
      <Box mt="10">
        <Heading mb="8">Courses</Heading>
        <Box
          display="grid"
          gridGap="10"
          gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesPage;
