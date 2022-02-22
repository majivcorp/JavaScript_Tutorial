CC = gcc
FLAGS = -Wall -Werror -Wextra
SRC = my_mastermind.c                            #alternative wld be -> $(wildcard *.c)
OBJECTS = $(SRC:.c=.o)                           #alternative wld be -> $(patsubst %.c,%.o,$(wildcard *.c)) 
SANITIZE = -fsanitize=address
TARGET = my_mastermind_game

all: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(FLAGS) $(SANITIZE) $(SRC) -o my_mastermind
	
clean: 	rm -f $(OBJECTS)	

fclean: clean   rm -f $(TARGET)

re:	fclean all

.PHONY:	all clean fclean re 


# material sourced for makefile compilation from https://youtu.be/_r7i5X0rXJk
# material sourced for makefile compilation from https://web.stanford.edu/class/archive/cs/cs107/cs107.1174/guide_make.html


# Intial makefile iteration
#CC_OPT=#-Wall -Wextra -Werror -g3 -fsanitize=address

#output: main.o my_mastermind.o
#	gcc main.o my_mastermind.o -o output

#main.o: main.c
#	gcc ${CC_OPT} -c main.c

#my_mastermind.o: my_mastermind.c my_mastermind.h
#	gcc ${CC_OPT} -c my_mastermind.c .