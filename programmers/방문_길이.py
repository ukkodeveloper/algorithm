def solution(dirs):
    pos = (0, 0)
    
    direction = {
        'U': (0, 1),
        'D': (0, -1),
        'R': (1, 0),
        'L': (-1, 0)
    }
    
    visited = set()
    
    for dir in dirs:
        dx, dy = direction[dir]
        x, y = pos
        
        if (-5 <= dx + x <= 5) and (-5 <= dy + y <= 5) :
            visited.add((x, x + dx, y, y + dy))
            visited.add((x + dx, x, y + dy, y))
            pos = (x + dx, y + dy)
            
    return len(visited) / 2