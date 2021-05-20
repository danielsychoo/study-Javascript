Feature: Hear shout

    Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

    To do:
        - only shout to people within a certain distance

    Rule: Shouts should only be heard if listener is within range

    Scenario: Listener is within range
        Given Lucy is located 1 meter from Sean
        When Sean shouts "free bagels at Sean's"
        Then Lucy hears Sean's message

    Scenario: Listener hears a different message
        Given Lucy is standing 15 meters from Sean
        When Sean shouts "Free coffee!"
        Then Lucy hears Sean's message