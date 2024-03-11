def solution(n, computers):
    
    #d/ visited
    answer = 0
    visited = [False] * len(computers)
    
    #f/ dfs
    def dfs(node):
        visited[node] = True
        for i, connected in enumerate(computers[node]):
            if connected == 1 and i != node and not visited[i]:
                dfs(i)
    
    for i in range(len(computers)):
        if not visited[i]:
            dfs(i)
            answer += 1
    
    return answer