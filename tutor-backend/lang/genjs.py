# All generative js code here.
# This is not very accurate obviously. We'll need to use a proper model and build learning for it to achieve proper answering.

# Generate JavaScript code and explanation
def generate_js_code(question: str):
    if "add" in question.lower() and ("number" in question.lower()):
        return {
            "code": "function add(num1, num2) {\n    return num1 + num2;\n}",
            "explanation": "This function takes two parameters and returns their sum."
        }
    elif "sub" in question.lower() and ("number" in question.lower()):
        return {
            "code": "function sub(num1, num2) {\n    return num1 - num2;\n}",
            "explanation": "This function takes two parameters and returns their difference."
        }
    elif "factorial" in question.lower():
        return {
            "code": "function factorial(n) {\n    return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);\n}",
            "explanation": "The function uses a ternary operator to check if n is 0 or 1 (base case), returning 1 in that case, otherwise, it returns n multiplied by the factorial of n - 1, working recursively."
        }
    elif "reverse" in question.lower() and ("string" in question.lower()):
        return {
            "code": "function reverseString(str) {\n    return str.split('').reverse().join('');\n}",
            "explanation": "This function splits the string into an array, reverses it, and joins it back into a string."
        }
    elif "largest" in question.lower() and ("array" in question.lower()):
        return {
            "code": "function findLargest(arr) {\n    return Math.max(...arr);\n}",
            "explanation": "This function uses the spread operator and Math.max to find the largest number in an array."
        }
    elif "check" in question.lower() and ("even" in question.lower() or "odd" in question.lower()):
        return {
            "code": "function isEven(num) {\n    return num % 2 === 0 ? 'Even' : 'Odd';\n}",
            "explanation": "This function checks if a number is divisible by 2 to determine if it is even or odd."
        }
    elif "check" in question.lower() and ("palindrome" in question.lower()):
        return {
            "code": "function isPalindrome(str) {\n    const reversed = str.split('').reverse().join('');\n    return str === reversed;\n}",
            "explanation": "This function checks if a string reads the same forward and backward."
        }
    elif "sort" in question.lower() and ("array" in question.lower()):
        return {
            "code": "function sortArray(arr) {\n    return arr.sort((a, b) => a - b);\n}",
            "explanation": "This function sorts an array of numbers in ascending order using the sort method with a comparator."
        }
