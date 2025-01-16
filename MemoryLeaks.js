// Memory leaks happen when a program fails to release memory after using it, which results is consuming 
// more and more memory and affects performance of program.

// To avoid leaking memory:
// Remove event listeners: Always remove event listeners when they are no longer needed.
// Clear references in closures: Avoid holding unnecessary references in closures.
// Manage DOM references: Explicitly remove DOM nodes and their references when they are no longer needed.
// Avoid global variables: Minimize the use of global variables to reduce the risk of inadvertently keeping references alive.