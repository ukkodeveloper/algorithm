def solution(board, moves):
    # d/ 인형 스택 관리
    # d/ count
    answer = 0
    stack = []
    
    # d/ 행별 lane
    lanes = [list(filter(lambda x: x!=0, reversed(lane))) for lane in zip(*board)]
    
    # l/ moves 이동하면서 스택 제거
    for move in moves:
        if lanes[move - 1]:
            doll = lanes[move - 1].pop()
            
            if stack and stack[-1] == doll:
                stack.pop()
                answer += 2
            else: 
                stack.append(doll)
        
    return answer