import { useMutation, useQuery } from "@tanstack/react-query";
import { addPlayers, getPlayers } from "./chess.api";
import { deletePlayer } from "./chess.api";

export const ChessQueryKeys = {
  chess: (page) => ["chess", page],
};

export const useChess = (page) => {
  return useQuery({
    queryKey: ChessQueryKeys.chess(page),
    queryFn: () => getPlayers(page),
    keepPreviousData: true,
  });
};

export const useCreatePlayer = () => {
  return useMutation({
    mutationFn: (newPlayer) =>
      addPlayers(newPlayer.name, newPlayer.rating, newPlayer.grade),
  });
};

export const useDeletePlayer = () => {
  return useMutation({
    mutationFn: deletePlayer,
  });
};
