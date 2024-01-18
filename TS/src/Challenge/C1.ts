{
  class GenericQueue<T> {
    private items: T[] = [];

    //enqueue 메서드 (큐를 데이터에 추가)
    enqueue(item: T): void {
      this.items.push(item);
    }
    //dequeue 메서드 (큐의 맨처음 데이터를 꺼낸다)
    dequeue(): T | undefined {
      return this.items.shift();
    }
    // peek 메서드 (큐의 맨처음 데이터를 확인)
    peek(): T | undefined {
      return this.items[0];
    }
    //size 메서드 (현재 큐의 사이즈 반환)
    size():number{
      return this.items.length;
    }
  }

  const stringQ = new GenericQueue<string>();
  stringQ.enqueue("hello")
  console.log(stringQ.peek());
  stringQ.dequeue()
  stringQ.enqueue("typescript");
  console.log(stringQ.size())
  console.log(stringQ.peek())
}