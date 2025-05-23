class SchoolProject:
    def __init__(self):
        self.lessons = []

    def add_lesson(self, lesson):
        if not len(self.lessons) < 10:
            self.lessons.append(lesson)
        else:
            raise Exception("Lesson list exceeds the limit")

# Example usage:
project = SchoolProject()
lesson = "Maths"  # Add a new lesson
try:
    project.add_lesson(lesson)
except Exception as e:
    print(e)

print(project.lessons)
