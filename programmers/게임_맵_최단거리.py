from collections import deque

def solution(maps):
    #d/ 방향 값
    moves = [
        [-1, 0], 
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    
    row_len = len(maps)
    col_len = len(maps[0])
    
    #d/ visited. v = distance / -1
    visited = [[-1] * col_len for _ in range(row_len)]
    
    #d/ queue
    q = deque([[0, 0]])
    #l/ bfs 시작
    visited[0][0] = 1
    
    while q:
        cur = q.popleft()
        
        #l/ 방향 별 계산
        for m in moves:
            row = cur[0] + m[0]
            col = cur[1] + m[1]
            
            if row < 0 or row >= row_len or col < 0 or col >= col_len:
                continue
            if maps[row][col] == 0:
                continue
            if visited[row][col] != -1:
                continue
                
            q.append([row, col])
            visited[row][col] = visited[cur[0]][cur[1]] + 1
    
    
    return visited[row_len - 1][col_len - 1]