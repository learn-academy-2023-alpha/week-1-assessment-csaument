# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: git is an open source set of rules and conventions that allows users to collaborate on projects using shared repositories. git allows each agent to work on local branches of repositories, package additions and subtractions, and push that package of changes to a host where each branch can be compared and merged. GitHub is a free to use implementation of the git standard and the largest repository of code.

Researched answer: Git is a version-control system that manages source code history. GitHub provodies cloud-based hosting of code respositories, allowing large teams to collaborate on a project. The source code is protected through rules 

2. Which JavaScript operators will return a Boolean value?

Your answer: <, >, <=, >=, !, !=, ==, and === provide different ways of operating on Boolean values or comparing numbers to return a Boolean value.

Researched answer:
|| Logical or; returns true if at least one element is true
&& Logical and; returns true when both elements are true
! Logical NOT; returns the opposite Boolean of its input
== Loosely equal; returns true when both elements are the same, notably makes numbers and strings containing numbers comparable
=== Strictly equal; returns true only when both elements are the same type and value
!= Not equal; returns true when the values are not equal, notably makes numbers and strings containing numbers comparable, this can provide a proxy in javascript for logical exclusive or
!== Not strictly equal; returns true when the values are not equal or the datatypes are not the same
< Less than; returns true if the value on the right is greater than the value on the left
> Greater than; returns true if the value on the left is greater than the value on the left
<= Less than or equal to; returns true if the value on the right is greater or equal to the value on the left
>= Greater than or equal to; returns true if the value on the left is greater than or equal to the value on the left

3. What is an index? What is the difference between index and value?

Your answer: An index is a location while a value is the object at that location. In Javascript, Strings and Arrays are common Objects that use indexed values to organize data. By convention, index values begin at 0.

Researched answer: Javascript implements arrays as objects. Array indices are non-negative integers, annotated with the bracket notation ([]). Javascript allows dynamic resizing of arrays through an accessible .length attribute. Javascript arrays can include a mixture of different datatypes, with each memory location including a pointer to the applicable value. Sparse arrays allow "empty" indices to hold the undefined primitive datatype. When arrays are copies, they create a "shallow" copy that stores pointers to the contained objects. Compilers must dynamically balance memory allocation and performance as they predict the use of an array.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer:

In Javascript, Arrays and Strings share many attributes and functions while providing some distinct differences in their operation. Both can be broken into component parts using index notation (eg. [0]), which allows custom functions to walk through and process their values. Strings and Arrays both implement an attribute for length and functions for concatenation. Strings specifically implement functions for modifying the case of their characters while Arrays specifically implement functions for reversing, pushing, popping, or shifting their objects.

There is additionally functionality that allows a String to .split("") into an Array of characters or to have an Array of characters .join("") into a String. Strings are potentially significantly more efficient with memory allocation and garbage collection, because Arrays can include any datatype as an object, including other Arrays.

Researched answer:

Although both arrays and strings share many similarities in use, Javascript implementation includes key differences that optimize performance based upon the level of flexibility offered by these object types.

Both allow dynamic sizing. Because a string is limited to containing only UTF-16 code units for each character, memory allocation for each character is both known and relatively small. This allows consistent performance optimized, whether an individual character, word, sentence, or entire paragraph is contained within the string. Because arrays allow any datatype to be contained at a given value, including empty undefined values, the memory required for each value is fundamentally unknown until defined in execution. Compilers may attempt to predict the type of each contained object or primitive. To manage memory allocation for array objects, each array contains pointers to the contained objects. These contained objects may be stored in non-contiguous memory allocation, providing reduced runtime efficiency.

When an array is expected to contain only a specific type of object, then typed arrays provide more efficient memory allocation and management. For examples, Int8Array allocates a single byte representing integers from -128 to 127 while Uint8Array allocates a single byte to represent non-negative integers from 0 to 255. Other typed arrays exist for signed and unsigned numbers; integers and fixed-point or floating-point numbers; and sized for 8, 16, 32, or 64 bits. Further research into specific compiler performance would describe how GPU and multi-threading could improve performance of these more narrowly defined objects.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer:

Pair programming is a technique that divides the functions of coding between a driver and a navigator. The driver writes the lines of code within a text editor while the navigator provides guidance and direction. By working in parallel, the pair shares the mental burden of coding, can collectively share ideas, and catch mistakes and errors more rapidly. These improvements develop higher quality code on first pass. Pair coding is also an effective technique for learning how to code.

Researched answer:

There is some controversy regarding the effectiveness of pair programming, with most opinions centering around empiracal experiences rather than controlled study. According to a 2009 meta-analysis(1), between-study variance and publication bias limit our confidence in study findings. Variables such as relative competency, code complexity, conscientiousness, and other factors of group compatabilty each influence the productivity of implementing pair programming (1),(2). In general, pair programming can be faster than solo programming for simple projects and produce higher quality solutions for complex projects (1). It is not clear whether these benefits outweigh the opportunity cost of two developers working simultaneously.

The scientific literature does provide stronger support for the use of pair programming for education. As long as both partners have sufficient social cohesion, collectively working on a problem seems to be more effective. This is likely because for students or novice coders, even "simple" problems represent significant development along their learning journey. Exploring new ideas and collaborating on projects is an effective approach to this novelty.

Overall, as this study indicates (3), further research using standardized terms and effective variable control is needed to further assess when pair programming can potentially provide the greatest utility over other project management options.

(1) https://www.sciencedirect.com/science/article/abs/pii/S0950584909000123
(2) https://journals.sagepub.com/doi/full/10.1177/0735633120949787
(3) https://cs.wellesley.edu/~webdb/lectures/01-Overview/PairProgramming.pdf

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Higher order functions implement other functions in their operation. This could be through recursive calls of the same function or through encapsulation through abstraction. Recursion either performs a given function until reaching a desired end condition or calls itself with a smaller subset of the input. Abstraction takes complicated, multi-step functions and creates component functions that perform various pieces.

2. Jest: Jest is a testing framework that provides a broad global state for running javascript applications.

3. Objects: Objects are containers for values. They provide predictable interaction by defining the same type of values that should be expected for each instance, while allowing unique interaction based upon specific value of each property.

4. Method: Methods are functions included as parameters of an object. Within javascript, they are defined within the class. They provide the ability to access or change the object based upon predictable/defined procedures.

5. Classes: Classes are typically used in object-oriented programming, although also many scripting languages implement forms of classes. Classes provide a reuseable template for objects that can maintain a state of values, provide interaction via both accessor and mutator methods, and otherwise provide consistent performance. They also provide security of their data through encapsulation.
