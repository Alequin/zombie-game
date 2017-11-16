
class Workers{

  constructor(){
    this.workers = []
  }

  getTotalEffort(){
    let count = 0
    for(let worker of this.workers){
      count += worker.getEffort()
    }
    return count
  }

}

export default Workers
