
import os
import music
import discord
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

client.run(TOKEN)

cogs = [music]  #declare all cogs

client = commands.Bot(command_prefix = "./", intents = discord.Intents.all())

for index in range(len(cogs)):
    cogs[index].setup(client) 

client.run = "OTM0MjU3OTc3MTIzMjk5NDI5.Yetdiw.XMFUJQkRF7LGmEaXdaHL--VYQGI"

