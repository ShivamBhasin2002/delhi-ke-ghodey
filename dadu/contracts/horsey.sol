// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

contract horsey {
  struct Horse {
        int id;
        string name;
        address owner;
        int speed;
        int acceleration;
        int agility;
        int stamina;
        int strength;
        int rarity;
        int theta;
    }

    struct Bid {
        address owner;
        int horseId;
        uint amount;
    }

    struct RaceData {
        string timestamp;
        int[] horses;
        Bid[] bids; 
    }

    mapping(address => Horse) public horses;
    RaceData public race;

    int private horseIdCounter = 0;
    function initialiseHorse(address _owner, Horse memory horse) public {
        require(msg.sender == _owner, "Unapproved caller");
        horse.id=horseIdCounter++;
        horses[_owner] = horse;
    }

    function breedOrExhaustHorse(
        address _owner,
        Horse memory newHorse
    ) public {
        require(
            (msg.sender == _owner),
            "Unapproved caller"
        );
        horses[_owner] = newHorse;
    }

    function initialiseRace(string memory timestamp) public {
        race.timestamp = timestamp;
    }

    function addRaceHorse(int horseId) public {
        require(race.horses.length<10,"Race is full");
        require(contains(race.horses, horseId)==false, "Horse already present");
        race.horses.push(horseId);
    }

    function bidOnHorse(address _owner, int horseId, uint bidAmount) public {
        require(contains(race.horses, horseId)==true, "Horse not in the race");
        Bid memory currBid = Bid(_owner, horseId, bidAmount);
        race.bids.push(currBid);
    }

    function contains(int[] memory array, int target) private pure returns (bool) {
        for (uint256 i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return true;
            }
        }
        return false;
    }

}
