import CircularList from "./CircularList";
import Node from "./Node";

class Compass {
    constructor(startingDirection) {
        this.directions = new CircularList();

        const nodes = {
            "N": new Node("N"),
            "E": new Node("E"),
            "S": new Node("S"),
            "W": new Node("W")
        };

        this.directions.add(nodes.N);
        this.directions.add(nodes.E);
        this.directions.add(nodes.S);
        this.directions.add(nodes.W);

        this.pointer = nodes[startingDirection];
    }

    moveLeft() {
        this.pointer = this.pointer.prev;
    }

    moveRight() {
        this.pointer = this.pointer.next;
    }

    getPosition() {
        return this.pointer.data;
    }
}

export default Compass;