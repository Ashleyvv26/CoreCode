.data
	number1: .asciiz "\nEnter the first number: "
	number2: .asciiz "\nEnter the second number: "
	result_message: .asciiz "\nThe result of the sum is: "
.text
	main:
		li $v0, 4
		la $a0, number1
		syscall

		li $v0, 5
		syscall

		move $t0, $v0

		li $v0, 4
		la $a0, number2
		syscall

		li $v0, 5
		syscall

		move $t1, $v0
		
		add $t3, $t0, $t1

		li $v0, 1
		move $a0, $t3
		syscall
		
