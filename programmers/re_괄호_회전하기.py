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
        for bracket in brackets:
            if bracket in pairs:
                if stack and stack[-1] == pairs[bracket]:
                    stack.pop()
                else:
                    break
            else:
                stack.append(bracket)
        
        else:
            if not stack:
                result += 1
        
            
    return result