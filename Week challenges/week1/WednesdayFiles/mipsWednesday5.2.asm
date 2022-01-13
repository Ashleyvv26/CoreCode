  .data
    message: .asciiz "\nAshley Valdez Vasquez\n"
  .text
    main:
      li $v0, 4
      la $a0, message
      syscall
