class DonutMaker {
    constructor(){
        this.donutCount = 0
        this.addDonut = 1

        this.autoClickerCount = 0
        this.autoClickerCost = 100

        this.multiplierCount = 0
        this.multiplierCost = 10
    }

    makeDonut(){
        this.donutCount = this.donutCount + this.addDonut
    }

    getDonutCount(){
        return this.donutCount
    }

    autoClicker(){
        if(this.donutCount >= this.autoClickerCost){
            this.donutCount = this.donutCount - this.autoClickerCost
            this.autoClickerCost++
            addToAutoClickerCost()
        }
    }

    addToAutoClickerCost(){
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.1
    }

    getAutoClickerCount(){
        return this.autoClickerCount
    }

    getAutoClickerCost(){
        return this.autoClickerCost
    }

    functioningAutoClicker(){
        this.donutCount = this.donutCount + this.autoClickerCount * this.addDonut
    }

    addMultiplier(){
        if(this.donutCount >= this.multiplierCost){
            this.donutCount = this.donutCount - this.multiplierCost
            this.multiplierCount++
            addToMultiplierCost()
            increaseDonutCountPercentage()
        }
    }

    getMultiplierCount(){
        return this.multiplierCount
    }

    getMultiplierCost(){
        return this.multiplierCost
    }

    addToMultiplierCost(){
        this.multiplierCost = this.multiplierCost + this.multiplierCost * 0.1
    }

    increaseDonutCountPercentage(){
        this.addDonut = this.addDonut + this.addDonut * 0.2
    }  

    getDonutValue(){
        return this.addDonut
    }
}