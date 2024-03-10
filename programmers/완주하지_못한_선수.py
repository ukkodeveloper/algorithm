def solution(participant, completion):
    count_dict = {}
    
    for person in participant:
        if not person in count_dict:
            count_dict[person] = 0
            
        count_dict[person] += 1
        
    for person in completion:
        count_dict[person] -= 1
    
    for key, count in count_dict.items():
        if (count == 1):
            return key
    