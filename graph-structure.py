class Graph:
    def __init__(self):
        self.list = {}
    
    def insert_edge(self,from_node,to_node):
        if from_node in self.list.keys():
            self.list[from_node].append(to_node)
        if to_node in self.list.keys():
            self.list[to_node].append(from_node)
        else:
            self.list[from_node] = [to_node]
            self.list[to_node] = [from_node]
    
    def printgrp(self):
        for i  in self.list:
            print(i,'->',' -> '.join([str(j) for j in self.list[i]]))
    
    def bfs(self,s):
        visited = [False] * 10
        queue = []
        queue.append(s)
        visited[s] = True

        while queue:
            node = queue.pop(0)
            print(node,end=" ")

            for i in self.list[node]:
                if visited[i] == False:
                    visited[i] = True
                    queue.append(i)
    
    def dfs_utils(self,vertex,visited):
        visited.append(vertex)
        print(vertex,end=" ")

        for i in self.list[vertex]:
            if i not in visited:
                visited.append(i)
                self.dfs_utils(i,visited)

    def dfs(self,v):
        visited = []
        self.dfs_utils(v,visited)


if __name__ == '__main__':
    obj = Graph()
    obj.insert_edge(1,2)
    obj.insert_edge(1,3)
    obj.insert_edge(1,4)
    obj.insert_edge(4,5)
    # obj.printgrp()
    # obj.bfs(1)
    obj.dfs(4)
