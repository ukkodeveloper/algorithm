def solution(want, number, discount):
    answer = 0
    dict = {}
    
    for i in range(len(want)):
        dict[want[i]] = number[i]
    
    for i in range(len(discount) - 9):
        current = {}
        for j in range(10):
            item = discount[i + j]
            
            if not item in current:
                current[item] = 0
                
            current[item] += 1
        if (current == dict):
            answer += 1
                
    
    return answer