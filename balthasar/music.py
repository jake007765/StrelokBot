

import youtube_dl
import discord
from discord.ext import commands



class Music (commands.Cog):
    

    __slots__ = ["__client"]

    def __init__(self, client) -> None:
        self.__client = client

    @commands.command
    async def join(self, ctx):
        if ctx.author.voice == None:
            await ctx.send("Fuck you, you're not in a voice channel")
        vc = ctx.author.voice.channel
        if ctx.voice.client is None:
            await vc.connect()
        else:
            await ctx.voice_client.move_to(vc)

    @commands.command
    async def dc(self, ctx):    #disconnect
        await ctx.voice_client.disconnect()

    @commands.command
    async def play(self, ctx):
        ctx.voice_client.stop()
        FFM_OPTIONS = {'before_options': ""}



def setup(client):
    client.add_cog(Music(client))

