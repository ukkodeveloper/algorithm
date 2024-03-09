def solution(s):
    #d/ 괄호 페어 
    pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    #d/ result (count)
    result = 0
    
    #l/ 괄호 문자열 생성
        
    for i in range(len(s)):
        brackets = s[i:] + s[0:i]
        
        #l/ stack 검증
        stack = []
        isValid = True
        for bracket in brackets:
            if bracket in pairs:
                if (not stack) or stack.pop() != pairs[bracket]:
                    isValid = False
                    break
                else:
                    continue
            else:
                stack.append(bracket)
        
        if (isValid == True) and (not stack):
            result += 1        
              
    return result