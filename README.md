# Roomba

This is a submission for my technical challenge at Tray.io.

A. Brief Description
  - Roomba is a program that charts the movement of an autonomous vaccuum cleaner (called a Roomba) as it moves across and cleans dirty spots of an imaginary rectangular grid-type room.
  - The program is defined in the "roomba.js" file and takes one other input file, named "input.txt", which contains the dimensions of this fictitious room, the starting position of the Roomba, a list of dirty spots, and a set of cardinal directions.
  - The output of the file is simply the ending position of the Roomba, and the number of dirty spots successfully cleaned.
  
B. How to Use
  Run "roomba.js" using node in a command line terminal, making sure that it is in the same directory as the "input.txt" file.

C. Additional Thoughts

Although this basic program does fulfill the requirements, some other improvements can be made, including:
  - Validation of the Roomba's starting position and position after each move to ensure that the Roomba is still within the confines of the imaginary room (i.e. not outside the grid dimensions). The program would likely throw an exception upon finding an erroneous position.
  - Validation of contents of input.txt file. Right now it just assumes the input.txt file follows the specified format in the prompt (i.e. last row is always cardinal directions) or input format (i.e. cardinal direction is one long string of only "NSWE" characters)
  - If we were to scale something like this, optimization of the code such that it uses the least amount of resources while running
