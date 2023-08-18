import sys


class Trade():
    def __init__(self, trader, asset, quantity, price):
        self.Trader = trader
        self.Asset = asset
        self.Quantity = quantity
        self.Price = price


class TheoUpdate():
    def __init__(self, asset, value):
        self.Asset = asset
        self.Value = value


class TradeAggregator():
    def __init__(self):
        self.traders = {}
        self.theo_values = {}
        self.best_score = -float('inf')
        self.best_traders = []

    def HandleTrade(self, trade):
        if trade.Asset in self.theo_values:
            theo_value = self.theo_values[trade.Asset]
        else:
            theo_value = trade.Price

        edge = theo_value - trade.Price
        score = edge * abs(trade.Quantity)

        if trade.Trader not in self.traders:
            self.traders[trade.Trader] = 0
        self.traders[trade.Trader] += score

        if self.traders[trade.Trader] > self.best_score:
            self.best_score = self.traders[trade.Trader]
            self.best_traders = [trade.Trader]
        elif self.traders[trade.Trader] == self.best_score:
            self.best_traders.append(trade.Trader)

    def HandleTheoUpdate(self, theoUpdate):
        self.theo_values[theoUpdate.Asset] = theoUpdate.Value

    def PrintBestScore(self):
        self.best_traders.sort()
        for trader in self.best_traders:
            PrintTraderScore(trader, self.traders[trader])
        print()


def ParseTrade(line):
    args = line.split(" ")
    return Trade(str(args[1]), int(args[2]), int(args[3]), float(args[4]))


def ParseTheoUpdate(line):
    args = line.split(" ")
    return TheoUpdate(int(args[1]), float(args[2]))


def PrintTraderScore(traderName, score):
    print(traderName, "{:.2f}".format(score))


tradeAgg = TradeAggregator()
for line in sys.stdin:
    if line.find("Trade") != -1:
        trade = ParseTrade(line)
        tradeAgg.HandleTrade(trade)
        tradeAgg.PrintBestScore()
    else:
        theoUpdate = ParseTheoUpdate(line)
        tradeAgg.HandleTheoUpdate(theoUpdate)

# Mocking input data as strings
input_data = [
    "Trade Trader1 1 95",
    "Trade Trader2 2 96",
    "Trade Trader3 1 98",
    "TheoUpdate 1 100",
    "Trade Trader1 2 102",
    "Trade Trader2 1 101",
    "Trade Trader3 2 99",
    "TheoUpdate 1 105",
    "TheoUpdate 2 110",
]

# Helper function to simulate running the script with the input data


def run_script_with_input(input_lines):
    import io
    import sys

    # Redirecting stdin to use the input data
    sys.stdin = io.StringIO("\n".join(input_lines))

    # Running the script
    import trade_aggregator
    trade_aggregator.main()


# Running the script with the test input data
run_script_with_input(input_data)
