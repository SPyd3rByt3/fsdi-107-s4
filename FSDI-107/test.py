def section_divider(title=""):
    print(f"\n{'=' * 20} {title} {'=' * 20}")

# Basic Variables and Data Types
player = "Mario"
game_series = "Super Mario"
level = 1
is_playing = True

section_divider("Player Info")
print(f"Current player: {player} in {game_series} at level {level}")

# Advanced Data Type Examples
score = 1000.5  # Float
lives_remaining = 3  # Integer
character_name = "Mario"  # String
game_active = True  # Boolean

section_divider("Type Conversion Examples")
# Converting game stats
points = "5000"
bonus = 99.9
lives = 3

print(float(points) + bonus)  # String to float: 5099.9
print(str(lives) + " lives remaining")  # Integer to string
print(int(bonus))  # Float to integer: 99

# String Formatting
section_divider("Game Status")
print(f"Player {player} has {lives} lives and {points} points with a {bonus} point bonus!")

# Advanced Operators
section_divider("Score Calculations")
base_score = 1000
multiplier = 2
bonus_points = 500

print(f"Base Score: {base_score}")
print(f"With Multiplier: {base_score * multiplier}")
print(f"With Bonus: {base_score * multiplier + bonus_points}")
print(f"Score Split 3 Ways: {base_score / 3}")
print(f"Remaining Points After 700: {base_score % 700}")
print(f"Score Squared: {base_score ** 2}")

# Comparison Operations with Game Logic
section_divider("Game Conditions")
min_score = 500
max_score = 2000
current_score = 1500

print(f"Score in valid range: {current_score >= min_score and current_score <= max_score}")
print(f"Extra life earned: {current_score > 1000 or lives > 5}")
print(f"Game Over: {not (lives > 0)}")

# Enhanced List Operations
section_divider("Power-Ups")
power_ups = ["Star", "Mushroom", "Fire Flower", "Ice Flower"]
print(f"Available power-up: {power_ups[0]}")
print(f"Last collected: {power_ups[-1]}")

# List Methods
power_ups.append("Super Leaf")
print("Added Super Leaf:", power_ups)

power_ups.insert(1, "Cape Feather")
print("Inserted Cape Feather:", power_ups)

collected = power_ups.pop()
print(f"Used power-up: {collected}")
print(f"Remaining power-ups: {power_ups}")

# Advanced Conditional Statements
section_divider("Game Status Checks")
energy = 75

if energy >= 90:
    print("Power level: Maximum!")
elif energy >= 70:
    print("Power level: High")
elif energy >= 50:
    print("Power level: Medium")
elif energy >= 30:
    print("Power level: Low")
else:
    print("Power level: Critical!")

# Enhanced Loops
section_divider("Level Progress")
# Count-controlled loop with break
for level in range(1, 6):
    if level == 4:
        print("Boss level reached!")
        break
    print(f"Completing level {level}")

# Collection-based loop with continue
enemies = ["Goomba", "Koopa", "Piranha Plant", "Bowser"]
for enemy in enemies:
    if enemy == "Piranha Plant":
        print("Skipping Piranha Plant...")
        continue
    print(f"Defeating {enemy}")

# Functions with Multiple Parameters
section_divider("Game Functions")
def calculate_final_score(base_score, multiplier=1, bonus=0):
    return (base_score * multiplier) + bonus

def update_player_status(name, level, score=0, is_active=True):
    status = "active" if is_active else "inactive"
    return f"Player {name} is {status} at level {level} with {score} points"

# Function calls
final_score = calculate_final_score(1000, 2, 500)
print(f"Final Score: {final_score}")

status = update_player_status("Mario", 5, 2500)
print(status)

